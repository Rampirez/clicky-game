import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Points from "./components/Points"
import friends from "./friends.json";
var points = 0;
var totalClicked = 0;

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    points,
    totalClicked
  };

  

  checkClick = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.map(friend => {
      if (friend.id == id) {
        if (friend.clicked == true) {
          this.state.points--;
        } else {
          this.state.points++;
          friend.clicked = true;
        };
      }
    return friend
    });
    
    function shuffle(array) {
      var currentIndex = array.length, temporaryValue, randomIndex;
    
      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
    
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
    
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
    
      return array;
    }
    
    shuffle(friends);

    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Clicky Game!</Title>
    <Points>Points: {this.state.points}</Points>
        {this.state.friends.map(friend => (
          <FriendCard
            checkClick={this.checkClick}
            id={friend.id}
            key={friend.id}
            image={friend.image}
            clicked={friend.click}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;

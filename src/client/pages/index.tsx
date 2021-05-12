import React from 'react';
import { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <b>Trvia Quiz Builder</b>
      <button>Sign Up/Login</button>
      <nav>
        <p>Find quizzes</p>
        <button>Latest</button>
        <button>By Tag</button>
        <button>By Name</button>
      </nav>
      <h1>Welcome to Trivia Quiz Builder</h1>
      <p>This site is for buidling and sharing trivia themed quizzes.</p>
      <p>Any quiz can be taken without an account.</p>
      <p>Users who sign up can build and upvote quizzes.</p>
    </>
  )
}

export default Home;

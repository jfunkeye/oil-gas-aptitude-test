import React, { useState, useEffect } from 'react';
import { getFirstSet, getNextSet } from './data/questions';
import HomeScreen from './components/Screens/HomeScreen';
import TestScreen from './components/Screens/TestScreen';
import ResultsScreen from './components/Screens/ResultsScreen';

function App() {
  const [screen, setScreen] = useState('home');
  const [currentQuestions, setCurrentQuestions] = useState(null);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(5400);
  const [currentSetIndex, setCurrentSetIndex] = useState(() => {
    const saved = localStorage.getItem('aptitudeTestState');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return parsed.currentSetIndex !== undefined ? parsed.currentSetIndex : -1;
      } catch {
        return -1;
      }
    }
    return -1;
  });
  const [completedSets, setCompletedSets] = useState(() => {
    const saved = localStorage.getItem('aptitudeTestState');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return parsed.completedSets || [];
      } catch {
        return [];
      }
    }
    return [];
  });
  const [totalSets] = useState(10);

  // Save state to localStorage when it changes
  useEffect(() => {
    const state = {
      completedSets,
      currentSetIndex
    };
    localStorage.setItem('aptitudeTestState', JSON.stringify(state));
  }, [completedSets, currentSetIndex]);

  const handleStartTest = () => {
    let questions;
    
    if (completedSets.length >= totalSets) {
      // All sets completed - reset silently
      setCompletedSets([]);
      setCurrentSetIndex(-1);
      const firstSet = getFirstSet();
      questions = firstSet.questions;
    } else {
      const nextSet = getNextSet(currentSetIndex);
      questions = nextSet.questions;
    }
    
    setCurrentQuestions(questions);
    setCurrentSetIndex(currentSetIndex + 1);
    setScreen('test');
  };

  const handleTestComplete = (userAnswers, remainingTime) => {
    setAnswers(userAnswers);
    setTimeLeft(remainingTime);
    setScreen('results');
  };

  const handleRetake = () => {
    // Mark current set as completed silently
    if (currentSetIndex >= 0 && !completedSets.includes(currentSetIndex)) {
      const updatedCompletedSets = [...completedSets, currentSetIndex];
      setCompletedSets(updatedCompletedSets);
      
      let questions;
      
      if (updatedCompletedSets.length >= totalSets) {
        // All sets completed - reset silently
        const firstSet = getFirstSet();
        questions = firstSet.questions;
        setCompletedSets([]);
        setCurrentSetIndex(-1);
      } else {
        const nextSet = getNextSet(currentSetIndex);
        questions = nextSet.questions;
        setCurrentSetIndex(currentSetIndex + 1);
      }
      
      setAnswers({});
      setTimeLeft(5400);
      setCurrentQuestions(questions);
      setScreen('test');
    } else {
      // Handle case where currentSetIndex is -1 or already completed
      setAnswers({});
      setTimeLeft(5400);
      
      const nextSet = getNextSet(currentSetIndex);
      setCurrentQuestions(nextSet.questions);
      setCurrentSetIndex(currentSetIndex + 1);
      setScreen('test');
    }
  };

  const handleGoHome = () => {
    if (currentSetIndex >= 0 && !completedSets.includes(currentSetIndex)) {
      setCompletedSets([...completedSets, currentSetIndex]);
    }
    
    setAnswers({});
    setTimeLeft(5400);
    setCurrentQuestions(null);
    setScreen('home');
  };

  return (
    <div style={{ background: '#ffffff', minHeight: '100vh' }}>
      {screen === 'home' && (
        <HomeScreen 
          onStartTest={handleStartTest}
        />
      )}
      {screen === 'test' && currentQuestions && (
        <TestScreen 
          questions={currentQuestions}
          onTestComplete={handleTestComplete}
        />
      )}
      {screen === 'results' && currentQuestions && (
        <ResultsScreen 
          questions={currentQuestions}
          answers={answers}
          timeLeft={timeLeft}
          onRetake={handleRetake}
          onHome={handleGoHome}
        />
      )}
    </div>
  );
}

export default App;
import React, { useEffect, useState } from 'react';
import { Badge } from 'react-bootstrap';

const Timer = ({ initialTime = 5400, onTimeUp }) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeUp?.();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, onTimeUp]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const getTimerColor = () => {
    if (timeLeft <= 60) return 'danger';
    if (timeLeft <= 300) return 'warning';
    return 'success';
  };

  return (
    <div className="d-flex align-items-center gap-2">
      <i className={`bi bi-clock text-${getTimerColor()} fs-5`}></i>
      <Badge 
        bg={getTimerColor()} 
        className={`fs-6 px-3 py-2 ${timeLeft <= 300 ? 'animate-pulse' : ''}`}
        style={{
          animation: timeLeft <= 300 ? 'pulse 1s infinite' : 'none'
        }}
      >
        ⏱ {formatTime(timeLeft)}
      </Badge>
    </div>
  );
};

export default Timer;
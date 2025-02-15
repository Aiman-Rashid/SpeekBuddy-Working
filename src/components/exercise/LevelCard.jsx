import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const LevelCard = ({ title, link, topics, isLocked }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`level-card ${isLocked ? "locked" : "unlocked"}`}>
      <h2>{title} {isLocked && "🔒"}</h2>

      <Link
        to={isLocked ? "#" : link}
        className={`button btn ${isLocked ? "btn-secondary disabled" : "btn-primary"}`}
        aria-disabled={isLocked}
      >
        {isLocked ? "Locked" : "Start Level"}
      </Link>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`dropdown-toggle ${isOpen ? "rotate-180" : ""}`}
        aria-expanded={isOpen}
      >
        ▼
      </button>

      {isOpen && (
        <ul className="submenu">
          {topics.map((topic, index) => (
            <li key={index} className="flex justify-between">
              <span className="topic-name">
                <strong>Topic {index + 1}:</strong> {topic.name}
              </span>
              <span className="topic-icon">{topic.icon}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

LevelCard.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  topics: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
  })).isRequired,
  isLocked: PropTypes.bool.isRequired,
};

export default LevelCard;

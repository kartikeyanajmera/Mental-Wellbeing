import React from 'react';

const Questionnaire = () => {
  return (
    <div className="py-8 px-4">
      <h2 className="text-lg font-semibold mb-4">How are you feeling today?</h2>
      <div className="space-y-4">
        <label className="block">
          <input type="radio" className="mr-2" name="mood" value="calm" /> Calm
        </label>
        <label className="block">
          <input type="radio" className="mr-2" name="mood" value="stressed" /> Stressed
        </label>
        <label className="block">
          <input type="radio" className="mr-2" name="mood" value="anxious" /> Anxious
        </label>
        {/* Add more options as needed */}
      </div>
    </div>
  );
};

export default Questionnaire;

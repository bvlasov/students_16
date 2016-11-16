import React from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';

export default ({ step, ...handlers }) => (
  <div className="step">
    <Button title ="+" handler={handlers.add} step={step} />
    <Input handler={handlers.set} />
    <Button title ="-" handler={handlers.deduct} step={step} />
  </div>
);
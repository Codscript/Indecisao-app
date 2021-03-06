import React from 'react';
import Option from './Option';

const Options = (props) => (
  <div>
    <div className="widget-header">
      <h3 className="widget-header__title">Suas opções</h3>
      <button
        className="button button--link"
        onClick={props.handleDeleteOptions}
      >
        Deletar tudo
    </button>
    </div>

    {props.options.length === 0 && <p className="widget__message">Por favor, adicione uma opção para começar!</p>}
    {
      props.options.map((option, index) => (
        <Option
          key={option}
          optionText={option}
          count={index + 1}
          handleDeleteOption={props.handleDeleteOption}
        />
      ))
    }
  </div>
);

export default Options;

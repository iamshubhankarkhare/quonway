export const handleChange = (e, changeState) => {
  changeState(e.target.value);
};

export const handleUrlOnKeyPress = (e, setSrc, fallbackImg) => {
  if (e.keyCode === 13) {
    if (e.target.value === '') setSrc(fallbackImg);
    else setSrc(e.target.value);
  }
};

export const handlePollOnKeyPress = (e, setPolls, setNewPoll, polls) => {
  if (e.keyCode === 13) {
    setPolls([...polls, e.target.value]);
    setNewPoll('');
  }
};

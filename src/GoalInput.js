import React, {useState} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {StyleSheet, Text, TextInput, View, Button} from 'react-native';

import * as courseActions from './actions';

const GoalInput = props => {
  const {navigate} = props.navigation;
  const [enteredGoal, setenteredGoal] = useState('');
  const [errorMsg, setErrorMsg] = useState(false);

  const goalInputHandler = enteredText => {
    setenteredGoal(enteredText);
    setErrorMsg(false);
  };

  const addItem = () => {
    if (enteredGoal !== '') {
      setenteredGoal('');
      setErrorMsg(false);
      props.actions.addItem({
        key: Math.random().toString(),
        value: enteredGoal,
      });
      navigate('GoalItem');
    } else {
      setErrorMsg(true);
    }
  };

  return (
    <View style={styles.inputContainer}>
      <View style={styles.handleInput}>
        <TextInput
          placeholder="Add a course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        {errorMsg && <Text>Enter a Text</Text>}
      </View>
      <Button
        title="ADD"
        onPress={() => {
          addItem();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
    padding: 20,
  },
  input: {
    width: '100%',
    borderColor: '#6e6beb',
    borderWidth: 1,
    padding: 10,
  },
  handleInput: {
    width: '80%',
    flexDirection: 'column',
  },
});

const mapStateToProps = state => {
  return {
    courseGoal: state.TodoReducer.courseGoal,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch,
    actions: bindActionCreators({...courseActions}, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GoalInput);

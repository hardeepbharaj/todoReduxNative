import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {StyleSheet, View, FlatList, TouchableOpacity, Button} from 'react-native';

import * as courseActions from './actions';

const GoalItem = props => {
  const {navigate} = props.navigation;
  const [goalItem, setGoalItem] = useState([]);

  useEffect(() => {
    setGoalItem(props.courseGoal);
  }, [props.courseGoal]);

  const deleteItem = key => {
    props.actions.deleteItem(key);
    if (goalItem.length === 1) {
      navigate('Home');
    }
  };

  return (
    <View style={styles.inputContainer}>
      <FlatList
        data={goalItem}
        renderItem={itemData => (
          <TouchableOpacity id={itemData.item.key} activeOpacity={0.8} >
            <View style={styles.listItem}>
              <Button title={itemData.item.value} />
              <Button
                title="Delete"
                onPress={() => deleteItem(itemData.item.key)}
              />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    padding: 20,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#fff',
    borderColor: '#6e6beb',
    borderWidth: 1,
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
)(GoalItem);

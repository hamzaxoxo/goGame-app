import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, FlatList } from 'react-native';
import { styles } from '../styles/HomeStyle';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import { colors } from '../utils/colors';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const [task, setTask] = useState<string>('');
  const [tasks, setTasks] = useState<string[]>([]);

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task.trim()]);
      setTask('');
    }
  };

  const removeTask = (index: number) => {
    const newTasks = tasks.filter((_, idx) => idx !== index);
    setTasks(newTasks);
  };
  const navigation = useNavigation();

  const handleLogout = () => {
    navigation.navigate("Login" as never);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>To-Do App</Text>
      <TextInput
        style={styles.input}
        value={task}
        onChangeText={setTask}
        placeholder="Enter a task"
      />
      <TouchableOpacity style={styles.button} onPress={addTask}
        // onPressIn={
        //   () => {
        //     styles.button = styles.button_hover;
        //   }
        // } 
        onPressOut={
          () => {
            styles.button = styles.button;
          }
        }>
        <Text style={styles.buttonText}>Add Task</Text>
      </TouchableOpacity>

      <FlatList
        data={tasks}
        renderItem={({ item, index }) => (
          <View style={styles.taskItem}>
            <Text style={styles.taskText}>{item}</Text>
            <View style={styles.rightIcon}>
              <TouchableOpacity onPress={() => removeTask(index)}>
                <Text style={styles.removeText}>
                  <FontAwesome name={"edit"} size={20} color={colors.secondary} />
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => removeTask(index)}>
                <Text style={styles.removeText}>
                  <FontAwesome name={"remove"} size={20} color={colors.error} />
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Ionicons name="log-out-outline" size={24} color={colors.white} />
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

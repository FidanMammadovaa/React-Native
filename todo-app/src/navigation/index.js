import { createNativeStackNavigator } from "@react-navigation/native-stack"
import ToDoList from "../screens/ToDoList"
import NewTask from "../screens/NewTask"
import EventIcon from '../icons/EventIcon'
import TaskIcon from '../icons/TaskIcon'
import GoalIcon from '../icons/GoalIcon'
import HomeScreen from "../screens/HomeScreen"
const Stack = createNativeStackNavigator()


export default function RootNavigation() {

    let todos = [
        {
            id: 1,
            completed: false,
            icon: 'TaskIcon',
            taskTitle: 'Study lesson',
            backgroundColor: '#DBECF6',
            time: null
        },
        {
            id: 2,
            icon: 'GoalIcon',
            completed: false,
            taskTitle: 'Run 5km',
            backgroundColor: '#FEF5D3',
            time: '4:00pm'
        },
        {
            id: 3,
            icon: 'EventIcon',
            completed: false,
            taskTitle: 'Go to party',
            backgroundColor: '#E7E2F3',
            time: '10:00pm'
        },
        {
            id: 4,
            icon: 'EventIcon',
            completed: true,
            taskTitle: 'Fame meetup',
            backgroundColor: '#E7E2F3',
            time: '10:00pm'
        },
        {
            id: 5,
            icon: 'TaskIcon',
            completed: true,
            taskTitle: 'Take out tash',
            backgroundColor: '#DBECF6',
            time: '10:00pm'
        },
    ]
    return (
        <Stack.Navigator initialRouteName="My Todo List">
            <Stack.Screen
                options={{ headerShown: false }}
                name="My Todo List"
                component={ToDoList}
                initialParams={{ contentText: 'October 20, 2022', titleShown: true, todos: todos }} />
            <Stack.Screen
                options={{ headerShown: false }}
                name="Add New Task"
                component={NewTask}
                initialParams={{ contentText: 'Add New Task', titleShown: false }} />
            <Stack.Screen
                options={{ headerShown: false }}
                name="Home Screen"
                component={HomeScreen} />
        </Stack.Navigator>
    )
}
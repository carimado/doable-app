// import { Box, TextField, Button } from '@mui/material';
// import { useState } from 'react';

// export default function InputBox({ onTaskAdd }) {
//     const [task, setTask] = useState('');

//     const handleChange = (event) => {
//         setTask(event.target.value);
//     };

//     const handleAddTask = () => {
//         onTaskAdd(task);
//         setTask('');
//     };

    
//     return (
//         <Box
//             component="form"
//             sx={{
//                 '& > :not(style)': { m: 1, width: '25ch' },
//             }}
//             noValidate
//             autoComplete="off" >
//             <TextField 
//                 label="Add Task" 
//                 variant="outlined" 
//                 onChange={handleChange}
//                 value={task} />
//             <Button 
//                 variant="contained" 
//                 onClick={handleAddTask}>Add</Button>
//         </Box>
//     );
// }
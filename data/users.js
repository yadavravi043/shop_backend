const bcrypt=require('bcryptjs')
const users=[
    {
        name:'Admin user',
        email:'Admin@gmail.com',
        password:bcrypt.hashsync('123456@',10),
        isAdmin:true
    },
    {
        name:'Ravi',
        email:'ravi@gmail.com',
        password:bcrypt.hashsync('123456@',10),
        isAdmin:true
    },
    {
        name:'Archana',
        email:'archu@gmail.com',
        password:bcrypt.hashsync('123456@',10),
        isAdmin:true
    }
]
export default users;
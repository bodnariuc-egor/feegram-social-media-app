const state = {
    profilePage: {
        posts: [
            {id:1, message:'Hi, how are you?', likesCount: 12},
            {id:2, message:'It\'s my first post', likesCount: 7},
            {id:3, message:'', likesCount: 0},
            {id:4, message:'', likesCount: 2},
          ],
    },
    dialogsPage: {
        messages: [
            {id:1, m:'Hi'},
            {id:2, m:'How are you?'},
            {id:3, m:'I have a plan'},
          ],
        dialogs: [
            {id:1, name:'Arthur'},
            {id:1, name:'John'},
            {id:1, name:'Dutch'},
            {id:1, name:'Hosea'},
        ]
    },
  }

  export default state;
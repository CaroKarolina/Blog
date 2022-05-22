//selectors

// actions
const createActionName = actionName => `app/posts/${actionName}`;

// action creators
const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    case 'REMOVE_POST':
      return statePart.filter(post => post.id !== action.payload.id);
    default:
      return statePart;
  };
};

export default postsReducer;
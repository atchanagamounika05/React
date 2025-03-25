const redux = require("redux");

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;

const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();

//Action
const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

/* {
  type: BUY_CAKE,
  info: "first raction in redux"
} */

// action creator

function buyCake() {
  return {
    type: BUY_CAKE,
    info: "first raction in redux",
  };
}

function buyIceCream() {
  return {
    type: BUY_ICECREAM,
  };
}

// reducer(prevState, action) => newState

/* const initState = {
  numOfCakes: 10,
  numOfIcecreams: 20,
}; */

const initCakeState = {
  numOfCakes: 10,
};

const initIcecreamState = {
  numOfIcecreams: 20,
};

/* function reducer(state = initState, action) {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIcecreams: state.numOfIcecreams - 1,
      };
    default:
      return state;
  }
} */

/*   init { numOfCakes: 10, numOfIcecreams: 20 }
updated { numOfCakes: 9, numOfIcecreams: 20 }
updated { numOfCakes: 8, numOfIcecreams: 20 }
updated { numOfCakes: 7, numOfIcecreams: 20 }
updated { numOfCakes: 7, numOfIcecreams: 19 }
updated { numOfCakes: 7, numOfIcecreams: 18 } */

function cakeReducer(state = initCakeState, action) {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
}

function icecreamReducer(state = initIcecreamState, action) {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIcecreams: state.numOfIcecreams - 1,
      };
    default:
      return state;
  }
}
/* init {
  cakeReducer: { numOfCakes: 10 },
  icecreamReducer: { numOfIcecreams: 20 }
}
updated {
  cakeReducer: { numOfCakes: 9 },
  icecreamReducer: { numOfIcecreams: 20 }
}
updated {
  cakeReducer: { numOfCakes: 8 },
  icecreamReducer: { numOfIcecreams: 20 }
}
updated {
  cakeReducer: { numOfCakes: 7 },
  icecreamReducer: { numOfIcecreams: 20 }
}
updated {
  cakeReducer: { numOfCakes: 7 },
  icecreamReducer: { numOfIcecreams: 19 }
}
updated {
  cakeReducer: { numOfCakes: 7 },
  icecreamReducer: { numOfIcecreams: 18 }
} */

const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream: icecreamReducer,
});

//logger

/* init { cake: { numOfCakes: 10 }, icecream: { numOfIcecreams: 20 } }
 action BUY_CAKE @ 08:47:42.611
   prev state { cake: { numOfCakes: 10 }, icecream: { numOfIcecreams: 20 } }
   action     { type: 'BUY_CAKE' }
   next state { cake: { numOfCakes: 9 }, icecream: { numOfIcecreams: 20 } }
 action BUY_CAKE @ 08:47:42.612
   prev state { cake: { numOfCakes: 9 }, icecream: { numOfIcecreams: 20 } }
   action     { type: 'BUY_CAKE' }
   next state { cake: { numOfCakes: 8 }, icecream: { numOfIcecreams: 20 } }
 action BUY_CAKE @ 08:47:42.612
   prev state { cake: { numOfCakes: 8 }, icecream: { numOfIcecreams: 20 } }
   action     { type: 'BUY_CAKE' }
   next state { cake: { numOfCakes: 7 }, icecream: { numOfIcecreams: 20 } }
 action BUY_ICECREAM @ 08:47:42.613
   prev state { cake: { numOfCakes: 7 }, icecream: { numOfIcecreams: 20 } }
   action     { type: 'BUY_ICECREAM' }
   next state { cake: { numOfCakes: 7 }, icecream: { numOfIcecreams: 19 } }
 action BUY_ICECREAM @ 08:47:42.613
   prev state { cake: { numOfCakes: 7 }, icecream: { numOfIcecreams: 19 } }
   action     { type: 'BUY_ICECREAM' }
   next state { cake: { numOfCakes: 7 }, icecream: { numOfIcecreams: 18 } } */

//store
const store = createStore(rootReducer, applyMiddleware(logger));
console.log("init", store.getState());
const unsubscribe = store.subscribe(() => {
  /* console.log("updated", logger); */
});
store.dispatch({ type: BUY_CAKE });
store.dispatch({ type: BUY_CAKE });
store.dispatch({ type: BUY_CAKE });
store.dispatch({ type: BUY_ICECREAM });
store.dispatch({ type: BUY_ICECREAM });
unsubscribe();

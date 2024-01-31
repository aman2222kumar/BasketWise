import {
  API_GET_REQUEST,
  API_GET_SUCCESS,
  API_GET_FAILURE,
  DATA_ADD_TO_LIST,
  DATA_REMOVE_TO_LIST,
  COUNT_INCREMENT,
  COUNT_DECREMENT,
} from "../redux/apiConstant";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

export const apiReducer = (state = initialState, action) => {
  switch (action.type) {
    case API_GET_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case API_GET_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
      };
    case API_GET_FAILURE:
      return {
        ...state,
        loading: false,
        data: null,
        error: action.error,
      };
    default:
      return state;
  }
};

//state and list for adding and removing

const initialData = {
  data: [],
};

export const apiReducerForList = (state = initialData, action) => {
  switch (action.type) {
    case DATA_ADD_TO_LIST:
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case DATA_REMOVE_TO_LIST:
      return {
        ...state,

        data: state.data.filter(
          (product, index) => product.id !== action.payload
        ),
      };

    default:
      return state;
  }
};

//count incrment and decrment reducer
const initialStateCount = {
  products: [],
};

export const productCountReducer = (state = initialStateCount, action) => {
  switch (action.type) {
    case COUNT_INCREMENT:
      const existingProductIndex = state.products.findIndex(
        (product) => product.id === action.payload.productId
      );

      if (existingProductIndex !== -1) {
        // Product already exists, update count and totalCurrentProductPrice
        return {
          ...state,
          products: state.products.map((product, index) => {
            if (index === existingProductIndex) {
              return {
                ...product,
                count: product.count + 1,
                totalCurrentProductPrice:
                  product.totalCurrentProductPrice + action.payload.price,
              };
            }
            return product;
          }),
        };
      } else {
        // Product doesn't exist, add it to the array
        return {
          ...state,
          products: [
            ...state.products,
            {
              id: action.payload.productId,
              count: 1,
              totalCurrentProductPrice: action.payload.price,
            },
          ],
        };
      }

    case COUNT_DECREMENT:
      return {
        ...state,
        products: state.products
          .map((product) => {
            if (product.id === action.payload.productId) {
              return {
                ...product,
                count: Math.max(product.count - 1, 0),
                totalCurrentProductPrice:
                  product.totalCurrentProductPrice - action.payload.price,
              };
            }
            return product;
          })
          .filter((product) => product.count > 0), // Remove product if count is 0
      }; // <-- Closing parenthesis was missing here

    default:
      return state;
  }
};

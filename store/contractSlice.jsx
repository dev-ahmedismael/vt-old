import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  personalInformation: {
    name: "",
    phone: "",
    email: "",
    company_type: "",
    commercial_number: "",
    tax_number: "",
    address: "",
    city: "",
    building_number: "",
    street_name: "",
    second_number: "",
    district: "",
    zip_code: "",
  },
  productDetails: {
    indoor_cameras: 1,
    outdoor_cameras: 1,
    storage_device: "",
    period_of_record: "",
    show_screens: 1,
    camera_type: "",
  },
  paymentDetails: {
    credit_card_owner_name: "",
    credit_card_number: "",
    ccv: "",
    expriy_date: "",
  },
  totalPrice: 0,
  discount: 0,
};

export const contractSlice = createSlice({
  name: "contract",
  initialState,
  reducers: {
    savePersonalInformation: (state, action) => {
      state.personalInformation = action.payload;
    },
    saveProductDetails: (state, action) => {
      state.productDetails = action.payload;
    },
    savePaymentDetails: (state, action) => {
      state.paymentDetails = action.payload;
    },
    calcTotalPrice: (state, action) => {
      state.totalPrice = action.payload;
    },
    applyDiscount: (state, action) => {
      state.totalPrice = state.totalPrice - state.totalPrice * action.payload;
    },
    setDiscount: (state, action) => {
      state.discount = action.payload;
    },
  },
});

export const {
  savePersonalInformation,
  saveProductDetails,
  savePaymentDetails,
  calcTotalPrice,
  applyDiscount,
  setDiscount,
} = contractSlice.actions;

export default contractSlice.reducer;

import * as Yup from "yup";


const CalculatorSchema = Yup.object().shape({
    input_0: Yup.string().required("Error"),

})

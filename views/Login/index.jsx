import React from "react";

import { Text, View, TextInput } from "react-native";

import { Button } from "../../components";
import api from "../../services";

import { initialState } from "./constants";
import { actions } from "./actions";
import { reducer } from "./reducer";

const Login = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const changeUser = (name, value) => {
    dispatch({ type: actions.setData, name, payload: value });
  };

  const Submit = async () => {
    try {
      dispatch({ type: actions.submit });
      const { data } = await api({
        method: "post",
        data: state.user,
        url: "/login",
      });
      //ejecutas que salió bien
      dispatch({ type: actions.submitSuccess });
    } catch (error) {
      dispatch({
        type: actions.submitError,
        payload: "Ocurrió un error en la aplicación",
      });
    }
  };

  return (
    <View>
      <TextInput
        value={state.user.correo}
        placeholder="Email"
        onChangeText={(text) => changeUser("correo", text)}
      />
      <TextInput
        value={state.user.password}
        placeholder="contraseña"
        onChangeText={(text) => changeUser("password", text)}
        secureTextEntry
      />
      <Button
        action={Submit}
        text={state.isLoading ? "Cargando..." : "Enviar"}
      />
      {state.error && <Text>{state.error}</Text>}
    </View>
  );
};

export default Login;

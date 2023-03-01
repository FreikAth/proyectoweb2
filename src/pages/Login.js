import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
                <body>
                    <main role="main" class="container my-auto bg-secondary col-md-4 p-5">
                        <div class="row">
                            <div id="login" class="">
                                <h2 class="text-center text-white">Login</h2>
                                <img class="img-fluid w-50 mx-auto d-block rounded" src="https://img.freepik.com/vector-premium/avatar-mujer-joven-corte-pelo-cuadrado-pelo-corto-grandes-ojos-verdes-ilustracion-vectorial_507168-50.jpg" alt="Responsive image"/>
                                <form>
                                    <div class="form-group">
                                        <label for="correo" class="text-white">Correo</label>
                                        <input type="email"  id="correo" name="correo" class="form-control"/>
                                    </div>
                                    <div class="form-group">
                                        <label for="palabraSecreta" class="text-white">Contraseña</label>
                                        <input type="password" id="palabraSecreta" name="contraseña" class="form-control"/>
                                    </div>
                                    <button type="submit" class="btn btn-info mb-2">Entrar</button>
                                </form>
                            </div>
                        </div>
                    </main>
                </body>
        );
    }
}

export default Login;
<template>
  <div class="cont-view">
    <form @submit.prevent="validateUser">
      <md-card >
        <md-card-header>
          <div class="md-title">Modificar Usuario</div>
        </md-card-header>

        <md-card-content>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('name')">
                <label for="name">Nombre</label>
                <md-input name="name" id="name" autocomplete="given-name" v-model="form.name" :disabled="sending" />
                <span class="md-error" v-if="!$v.form.name.required">El nombre es requerido</span>
                <span class="md-error" v-else-if="!$v.form.name.minlength">Nombre inválido</span>
              </md-field>
            </div>
          </div>

          <md-field :class="getValidationClass('email')">
            <label for="email">Email</label>
            <md-input type="email" name="email" id="email" autocomplete="email" v-model="form.email" disabled/>
            <span class="md-error" v-if="!$v.form.email.required">Se requiere email</span>
            <span class="md-error" v-else-if="!$v.form.email.email">Invalid email</span>
          </md-field>

          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('monday')">
                <label for="monday">Lunes</label>
                <md-select name="monday" id="monday" v-model="form.monday" md-dense :disabled="sending">
                  <md-option></md-option>
                  <md-option value="all">Todo el día</md-option>
                  <md-option value="am">Mañana</md-option>
                  <md-option value="pm">Tarde</md-option>
                  <md-option value="no">No disponible</md-option>
                </md-select>
                <span class="md-error">Ingresa la disponibilidad horaria</span>
              </md-field>
            </div>

            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('tuesday')">
                <label for="tuesday">Martes</label>
                <md-select name="tuesday" id="tuesday" v-model="form.tuesday" md-dense :disabled="sending">
                  <md-option></md-option>
                  <md-option value="all">Todo el día</md-option>
                  <md-option value="am">Mañana</md-option>
                  <md-option value="pm">Tarde</md-option>
                  <md-option value="no">No disponible</md-option>
                </md-select>
                <span class="md-error">Ingresa la disponibilidad horaria</span>
              </md-field>
            </div>

            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('wednesday')">
                <label for="wednesday">Miércoles</label>
                <md-select name="wednesday" id="wednesday" v-model="form.wednesday" md-dense :disabled="sending">
                  <md-option></md-option>
                  <md-option value="all">Todo el día</md-option>
                  <md-option value="am">Mañana</md-option>
                  <md-option value="pm">Tarde</md-option>
                  <md-option value="no">No disponible</md-option>
                </md-select>
                <span class="md-error">Ingresa la disponibilidad horaria</span>
              </md-field>
            </div>

            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('thursday')">
                <label for="thursday">Jueves</label>
                <md-select name="thursday" id="thursday" v-model="form.thursday" md-dense :disabled="sending">
                  <md-option></md-option>
                  <md-option value="all">Todo el día</md-option>
                  <md-option value="am">Mañana</md-option>
                  <md-option value="pm">Tarde</md-option>
                  <md-option value="no">No disponible</md-option>
                </md-select>
                <span class="md-error">Ingresa la disponibilidad horaria</span>
              </md-field>
            </div>

            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('friday')">
                <label for="friday">Friday</label>
                <md-select name="friday" id="friday" v-model="form.friday" md-dense :disabled="sending">
                  <md-option></md-option>
                  <md-option value="all">Todo el día</md-option>
                  <md-option value="am">Mañana</md-option>
                  <md-option value="pm">Tarde</md-option>
                  <md-option value="no">No disponible</md-option>
                </md-select>
                <span class="md-error">Ingresa la disponibilidad horaria</span>
              </md-field>
            </div>

            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('saturday')">
                <label for="saturday">Sábado</label>
                <md-select name="saturday" id="saturday" v-model="form.saturday" md-dense :disabled="sending">
                  <md-option></md-option>
                  <md-option value="all">Todo el día</md-option>
                  <md-option value="am">Mañana</md-option>
                  <md-option value="pm">Tarde</md-option>
                  <md-option value="no">No disponible</md-option>
                </md-select>
                <span class="md-error">Ingresa la disponibilidad horaria</span>
              </md-field>
            </div>

            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('sunday')">
                <label for="sunday">Domingo</label>
                <md-select name="sunday" id="sunday" v-model="form.sunday" md-dense :disabled="sending">
                  <md-option></md-option>
                  <md-option value="all">Todo el día</md-option>
                  <md-option value="am">Mañana</md-option>
                  <md-option value="pm">Tarde</md-option>
                  <md-option value="no">No disponible</md-option>
                </md-select>
                <span class="md-error">Ingresa la disponibilidad horaria</span>
              </md-field>
            </div>
          </div>

          <md-field :class="getValidationClass('newpassword')">
            <label for="newpassword">Contraseña</label>
            <md-input name="newpassword" id="newpassword" autocomplete="newpassword" v-model="form.newpassword" type="password" :disabled="sending" ></md-input>
            <span class="md-error">Ingresa una contraseña de al menos 8 caracteres</span>
          </md-field>


        </md-card-content>

        <md-progress-bar md-mode="indeterminate" v-if="sending" />

        <md-card-actions>
          <md-button type="submit" class="md-primary" :disabled="sending">Create user</md-button>
        </md-card-actions>
      </md-card>

    </form>
  </div>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import {
    required,
    email,
    minLength,
    maxLength
  } from 'vuelidate/lib/validators'
  //import { findKey } from "lodash";

  export default {
    name: "Modificar",
    mixins: [validationMixin],
    data: () => ({
      id: null,
      userSaved: false,
      sending: false,
      lastUser: null
    }),
    validations: {
      form: {
        name: {
          required,
          minLength: minLength(3)
        },
        age: {
          required,
          maxLength: maxLength(3)
        },
        monday: {
          required
        },
        tuesday: {
          required
        },
        wednesday: {
          required
        },
        thursday: {
          required
        },
        friday: {
          required
        },
        saturday: {
          required
        },
        sunday: {
          required
        },
        email: {
          required,
          email
        },
        newpassword: {
          required,
          minLength: minLength(8)
        }
      }
    },
    mounted() {
      this.id = this.$route.params.id;
      console.log("id***", this.form);
      this.getData(this.id);
    },
    computed: {
      form() {
        let workers = this.$store.state.workers;
        let i = 0;
        let findWorker = '';
        do {
          if (Number(workers[i].id) == Number(this.$route.params.id)) {
            findWorker = workers[i];
          }
          i++;
        } while (findWorker == '');

        return {
          name: findWorker.name,
          email: findWorker.email,
          monday: findWorker.monday,
          tuesday: findWorker.tuesday,
          wednesday: findWorker.wednesday,
          thursday: findWorker.thursday,
          friday: findWorker.friday,
          saturday: findWorker.saturday,
          sunday: findWorker.sunday,
          newpassword: findWorker.password
        };
      }
    },
    methods: {
      getData(id){
        var user = id;
        console.log("user***", user);

      },
      getValidationClass(fieldName) {
        const field = this.$v.form[fieldName];

        if (field) {
          return {
            'md-invalid': field.$invalid && field.$dirty
          }
        }
      },
      clearForm() {
        this.$v.$reset();
        this.form.firstName = null;
        this.form.lastName = null;
        this.form.age = null;
        this.form.gender = null;
        this.form.email = null;
      },
      saveEdition() {
        this.sending = true;

        let edition = this.form;
        console.log("edition", edition)
        this.$store.commit("editWorker", edition);

        // Instead of this timeout, here you can call your API
        window.setTimeout(() => {
          this.lastUser = `${this.form.firstName} ${this.form.lastName}`;
          this.userSaved = true;
          this.sending = false;
          this.clearForm()
        }, 1500)
      },
      validateUser() {
        this.$v.$touch();
        
        console.log("*********", this.$v.$invalid);
        //if (!this.$v.$invalid) {
          console.log('VALIDATE USER')
          this.saveEdition()
        //}
      }
    },
  }
</script>

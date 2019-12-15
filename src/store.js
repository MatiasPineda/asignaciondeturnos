import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";
import { findKey, cloneDeep } from "lodash";

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.sessionStorage
});

export default new Vuex.Store({
  plugins: [vuexLocal.plugin],
  state: {
    auth: "",
    user: {},
    client: {},
    workers: [
      {
        id: 0,
        name: 'Juan Fernandez',
        email: 'jfernandez@mail.com',
        password: 'password123',
        monday: 'am',
        tuesday: 'all',
        wednesday: 'no',
        thursday: 'pm',
        friday: 'all',
        saturday: 'all',
        sunday: 'am'
      },
      {
        id: 1,
        name: 'Bastián Romo',
        email: 'bastianromo@mail.com',
        password: 'contrasena123',
        monday: 'pm',
        tuesday: 'pm',
        wednesday: 'pm',
        thursday: 'no',
        friday: 'no',
        saturday: 'pm',
        sunday: 'pm'
      },
      {
        id: 2,
        name: 'Joaquín Sánchez',
        email: 'joaquins@mail.com',
        password: 'mipass123456',
        monday: 'all',
        tuesday: 'all',
        wednesday: 'all',
        thursday: 'am',
        friday: 'am',
        saturday: 'pm',
        sunday: 'no'
      },
      {
        id: 3,
        name: 'Eliana González',
        email: 'eli.ana@mail.com',
        password: 'mipass123456',
        monday: 'all',
        tuesday: 'all',
        wednesday: 'all',
        thursday: 'am',
        friday: 'am',
        saturday: 'pm',
        sunday: 'no'
      },
      {
        id: 4,
        name: 'Andrea Soto',
        email: 'andreasoto@mail.com',
        password: 'andrea123456',
        monday: 'no',
        tuesday: 'no',
        wednesday: 'no',
        thursday: 'pm',
        friday: 'all',
        saturday: 'all',
        sunday: 'all'
      },
      {
        id: 5,
        name: 'Pedro Engel',
        email: 'pedroengelmipastor@mail.com',
        password: 'engel1234',
        monday: 'am',
        tuesday: 'am',
        wednesday: 'am',
        thursday: 'am',
        friday: 'am',
        saturday: 'no',
        sunday: 'no'
      },
      {
        id: 6,
        name: 'Rosa Rojas',
        email: 'rosarojas.r@mail.com',
        password: 'contrasena12345',
        monday: 'no',
        tuesday: 'pm',
        wednesday: 'no',
        thursday: 'all',
        friday: 'all',
        saturday: 'pm',
        sunday: 'am'
      }
    ],
    store: "",
    worker: "",
    previewCart: false
  },
  mutations: {
    addWorker(state, worker) {
      worker = Object.assign(worker, {
        id: worker.id,
        name: worker.name,
        email: worker.email,
        password: worker.password,
        monday: worker.monday,
        tuesday: worker.tuesday,
        wednesday: worker.wednesday,
        thursday: worker.thursday,
        friday: worker.friday,
        saturday: worker.saturday,
        sunday: worker.sunday
      });

      const isset = findKey(state.workers, { id: worker.id });

      if (!isset) {
        state.workers.push(worker);
      } else {
        state.workers[isset].quantity =
          Number(state.workers[isset].quantity) + Number(worker.quantity);
      }

      // Refresh totalPrice
      const key = findKey(state.workers, { id: worker.id });

      state.workers[key].totalPrice =
        state.workers[key].quantity * worker.pricePerUnit;

      state.workers = cloneDeep(state.workers);
    },
    editWorker(state, worker) {
      worker = Object.assign(worker, {
        id: worker.id,
        name: worker.name,
        email: worker.email,
        password: worker.password,
        monday: worker.monday,
        tuesday: worker.tuesday,
        wednesday: worker.wednesday,
        thursday: worker.thursday,
        friday: worker.friday,
        saturday: worker.saturday,
        sunday: worker.sunday
      });

      const isset = findKey(state.workers, { id: worker.id });

      if (!isset) {
        state.workers.push(worker);
      } else {
        state.workers[isset] = worker;
      }
      state.workers = cloneDeep(state.workers);
    },
    removeWorker(state, index) {
      state.workers.splice(index, 1);
    },
    cleanCart(state) {
      state.workers = {};
    },
    cleanClient(state) {
      state.client = {};
    },
    cleanStore(state) {
      state.store = {};
    },
    login(state, token) {
      state.auth = token;
    },
    client(state, client) {
      state.client = client;
    },
    user(state, user) {
      state.user = user;
    },
    logout(state) {
      state.auth = 0;
    },
    previewCart(state, value) {
      state.previewCart = value;
    },
    setWorker(state, value) {
      state.worker = value;
    },
    clearWorker(state) {
      state.worker = "";
    },
    store(state, value) {
      state.store = value;
    }
  },
  actions: {
    login() {
    },
    logout({ commit }) {
      return new Promise(resolve => {
        commit("clearWorker");
        commit("cleanClient");
        commit("cleanStore");
        commit("logout");
        resolve();
      });
    }
  },
  getters: {
    isLoggedIn: state => !!state.auth,
    showPreviewCart: state => !!state.previewCart,
    workers: state => state.workers,
    worker: state => state.worker,
    client: state => state.client
  }
});

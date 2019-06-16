<template>
  <div>
    <div>
      <button @click="goBack">Home Page</button>
      <h1>Edit Users Page</h1>
      <button @click="isAddUserMode=true">Add User</button>
    </div>
    <div v-if="isAddUserMode">
      <input type="text" v-model="first_name" placeholder="Name">
      <input type="text" v-model="last_name" placeholder="SurName">
      <input type="text" v-model="phone" placeholder="Phone">
      <input type="text" v-model="email" placeholder="Email">
      <button @click="handleAddUser">ADD</button>
    </div>
    <div>
      <table border="1" width="100%" cellpadding="5">
        <thead>
          <th>Name</th>
          <th>Surname</th>
          <th>Phone</th>
          <th>Email</th>
          <th>
            Action
            <button @click="editMode = !editMode">✏️</button>
          </th>
        </thead>
        <tbody>
          <tr v-for="(user,index) in usersData" :key="index">
            <td>
              <input type="text" v-model="user.first_name" :hidden="!editMode">
              <span v-if="!editMode">{{user.first_name}}</span>
            </td>
            <td>
              <input type="text" v-model="user.last_name" :hidden="!editMode">
              <span v-if="!editMode">{{user.last_name}}</span>
            </td>
            <td>
              <input type="text" v-model="user.phone" :hidden="!editMode">
              <span v-if="!editMode">{{user.phone}}</span>
            </td>
            <td>
              <input type="text" v-model="user.email" :hidden="!editMode">
              <span v-if="!editMode">{{user.email}}</span>
            </td>
            <td>
              <button @click="handleDeleteUser(index)">X</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div>
      <button @click="handleSaveData">Save</button>
    </div>
    <div>
      <textarea
        :placeholder="`Parse Your JSON type:  {  
  'users': [
    { 'first_name': 'Dickerson', 'last_name': 'Macdonald', 'phone': '380994978929', 'email': 'xxxx@gmail.com' },
    { 'first_name': 'Larsen', 'last_name': 'Shaw', 'phone': '380994978546', 'email': 'x1xxуx@gmail.com' },
    { 'first_name': 'Geneva', 'last_name': 'Wilson', 'phone': '380994977756', 'email': 'xx421xx@gmail.com' },
    { 'first_name': 'Jami', 'last_name': 'Carney', 'phone': '380090357839', 'email': 'czcxx@gmail.com' }
  ]  
}`"
        v-model="parseJSON"
      ></textarea>
      <button @click="handleParseJSON">Parse</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "EditPage",
  data() {
    return {
      parseJSON:'',
      editMode: false,
      isAddUserMode: false,
      first_name: "",
      last_name: "",
      phone: "",
      email: ""
    };
  },
  computed: {
    usersData() {
      return this.$store.state.users;
    }
  },
  methods: {
    goBack() {
      this.$router.push("/");
    },
    handleDeleteUser(id) {
      this.$store.dispatch("deleteUser", id);
    },
    handleAddUser() {
      let user = {
        first_name: this.first_name,
        last_name: this.last_name,
        phone: this.phone,
        email: this.email
      };
      this.$store.dispatch("addUser", user);
      this.isAddUserMode = false;
    },
    handleSaveData() {
      this.$store.dispatch("saveUsers", this.usersData);
    },
    handleParseJSON() {
      let newUsers = JSON.parse(this.parseJSON);
      this.$store.dispatch("addUser", newUsers.users);
    }
  }
};
</script>

<style>
</style>

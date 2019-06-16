<template>
  <div class="home">
    <div class="addBtnField">
      <button @click="handleAddButton">
        Add
      </button>
    </div>
    <div class="infoTableField">
      <table border="1" width="100%" cellpadding="5">
        <thead>
          <th>Name</th>
          <th>Surname</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Action</th>
        </thead>
        <tbody>
          <tr v-for="(user, idx) in users" :key="idx">
            <td>
              {{user.first_name}}
            </td>
              <td>
              {{user.last_name}}
            </td>
              <td>
              {{user.phone}}
            </td>
              <td>
              {{user.email}}
            </td>
            <td>
              <button @click="handleEditButton(idx)">
                Edit
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>

const EDIT_ROUTE = `/editpage`

export default {
  name: 'home',
  components: {
  },
  computed: {
    users() {
      return this.$store.state.users
    }
  }, 
  methods: {
    handleAddButton() {
      this.$router.push(EDIT_ROUTE)
    },
    handleEditButton(id) {
      this.$router.push(EDIT_ROUTE)
    }
  }
};
</script>

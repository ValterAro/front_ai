<template>
  <div class="col-8" style="margin: auto;">
    <table class="table table-striped table-dark">
      <thead>
      <tr>
        <th scope="col">Nimi</th>
        <th scope="col">Firma</th>
        <th scope="col">Kirjeldus</th>
<!--        <th scope="col">Skoor</th>-->
        <th scope="col">Link</th>
        <th scope="col">Lisatud</th>
        <th scope="col">Tüüp</th>
        <th scope="col">Lisaja</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="site in sites">
        <td>{{site.name}}</td>
        <td>{{site.company}}</td>
        <td>{{site.description}}</td>
        <td><a :href="site.link" target="_blank">{{site.link}}</a></td>
        <td>{{formatDate(site.createdAt)}}</td>
        <td>{{site.typeName}}</td>
        <td>{{ site.userUsername }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: 'SiteTable',
  data: function () {
    return {
      sites: [
        {
          id: 0,
          name: '',
          company: '',
          description: '',
          link: '',
          typeName: '',
          userUsername: '',
          status: '',
          createdAt: '',
          updatedAt: ''
        }
      ],
    }
  },
  methods: {
    getAllSites: function () {
      this.$http.get("/sites")
          .then(response => {
            this.sites = response.data;
            console.log(this.sites);
          })
          .catch(error => {
            console.log(error)
          })
    },
    formatDate: function(timestamp) {
      const date = new Date(timestamp);
      const day = date.getDate().toString().padStart(2, '0');
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const year = date.getFullYear();
      const hours = date.getHours().toString().padStart(2, '0');
      const minutes = date.getMinutes().toString().padStart(2, '0');
      return `${year}-${month}-${day} ${hours}:${minutes}`;
    }
  },
  beforeMount() {
    this.getAllSites()
  }
}
</script>

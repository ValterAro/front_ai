<template>
  <div class="col-8" style="margin: auto;">
    <table class="table table-striped table-dark">
      <thead>
      <tr>
        <th scope="col">Nimi</th>
        <th scope="col">Firma</th>
        <th scope="col">Kirjeldus</th>
        <th scope="col">Skoor</th>
        <th scope="col">Link</th>
        <th scope="col">Viimati uunedatud</th>
        <th scope="col">Tüüp</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>ChatGPT</td>
        <td>OpenAI</td>
        <td>Enim kasutatud keelemudel, mis vastab küsimustele ja genereerib teksti</td>
        <td>5</td>
        <td><a href="https://chat.openai.com/" target="_blank">https://chat.openai.com/</a></td>
        <td>Mai 2023</td>
        <td>text-to-text</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: 'SiteTable'
}
</script>

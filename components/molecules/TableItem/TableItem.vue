<template>
  <div class="table">
    <h3 class="table__title container-small">Table item</h3>
    <div class="table__wrap">
      <table class="table__table container-middle" border="1" summary="описание содержания таблицы">
        <caption>Описание таблицы</caption>
        <thead>
        <tr class="one">
          <th scope="col" id="header1" headers="col1">Заголовок 1</th>
          <th scope="col" id="header2" headers="col2">Заголовок 2</th>
          <th scope="col" id="header3" headers="col3">Заголовок 3</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td headers="col1">Ячейка 1-1</td>
          <td headers="col1">Ячейка 1-2</td>
          <td headers="col1">Ячейка 1-3</td>
        </tr>
        <tr>
          <td headers="col2">Ячейка 2-1</td>
          <td headers="col2">Ячейка 2-2</td>
          <td headers="col2">Ячейка 2-3</td>
        </tr>
        <tr>
          <td headers="col3">Ячейка 3-1</td>
          <td headers="col3">Ячейка 3-2</td>
          <td headers="col3">Ячейка 3-3</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
@import "TableItem.scss";
</style>
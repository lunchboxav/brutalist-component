<style>
  .formContainer {
    border: 4px solid black;
    font-family: "Helmet";
    padding: 24px;
  }

  .formInline {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
    border: 4px solid gray;
    margin-bottom: 8px;
    padding: 8px;
  }

  label {
    margin-right: 16px;
  }

  textArea, input {
    min-width: 320px;
    border: none;
  }

  textarea {
    resize: none;
  }

</style>

<div class="formContainer">
  <form>
    <div class="formInline">
      <label for="nama">Nama:</label>
      <input type="text" id="nama" name="nama" />
    </div>
    <div class="formInline">
      <label for="alamat">Alamat:</label>
      <textarea rows="4" id="alamat" />
    </div>
  </form>
</div>

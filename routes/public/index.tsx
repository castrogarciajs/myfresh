function PagePublic() {
  const handleSubmit = (event: Event) => {
    event.preventDefault();
    console.log("event");
  };
  return (
    <div class="container-form">
      <form class="form-container">
        <p class="content-title">
          <label class="title">¿Que estas sientiendo?</label>
          <input
            type="text"
            name="title"
            class="form-title"
            placeholder="Tengo Sueño..."
            autoComplete="off"
          />
        </p>
        <p class="content-description">
          <label class="description">¿que estas pensando?</label>
          <textarea
            name="description"
            class="form-description"
            rows={4}
            placeholder="Dormir en Dubai..."
            autoComplete="off"
          ></textarea>
        </p>
        <p class="content-button">
          <button onClick={handleSubmit} type="submit">
            public
          </button>
        </p>
      </form>
    </div>
  );
}

export default PagePublic;

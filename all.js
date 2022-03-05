Quill.register("modules/imageUploader", ImageUploader);

let options = {
  modules: {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      ['link'],
      ['image'],
    ],
    imageResize: {
      displaySize: true
    },
    imageUploader: {
      upload: (file) => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(
              "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            );
          }, 3500);
        });
      },
    },
  },
  theme: 'snow'
};

let editor = new Quill('#quillSet', options);

// EasyHTTP Library using async await
// Library for making HTTP requests
// @version 3.0.0
// @author Ajay Sharma
// @licence MIT

class EasyHTTP {
  async get(url) {
    const res = await fetch(url);
    const posts = await res.json();
    return posts;
  }

  // Make HTTP Post request
  async post(url, data) {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(data)
    });

    const resData = res.json();
    return resData;
  }

  // Make HTTP Put request
  async put(url, data) {
    const res = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(data)
    });
    const resData = await res.json();
    return resData;
  }

  // Make HTTP Delete request
  async delete(url) {
    const res = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json"
      }
    });
    const resData = await res.json();
    return `Resource: ${resData} has been deleted...`;
  }
}

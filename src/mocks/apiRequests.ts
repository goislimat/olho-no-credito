export function successApiRequest(values: any) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(`Successfully submitted: ${JSON.stringify(values, null, 2)}`);
    }, 2000);
  });
}

export function failApiRequest(values: any) {
  return new Promise(function (_, reject) {
    setTimeout(() => {
      reject(`Failed to submit: ${JSON.stringify(values, null, 2)}`);
    }, 2000);
  });
}

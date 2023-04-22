export const validateTeleChar = (value) => /^[0-9()+-\s]+$/.test(value);

export const validateEmail = (email) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

export async function sendInquiry(data = {}, API) {
  const response = await fetch(API, {
    method: "POST",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return { status: response.status, data: await response.json() };
}

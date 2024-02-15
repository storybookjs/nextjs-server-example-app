export async function getBuild(number: number) {
  return {
    number,
    name: `Build #${number}`,
    status: 'PASSED',
  };
}


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log("Microservices rock!");
    const anime = process.env.FAVORITE_AINIME;
    console.log(`My favorite anime is ${anime}`);
    await sleep(5000);
  }
}

main();

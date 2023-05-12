let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let i = 0; i <= a.length - 1; i++) {
  if (a[i] % 2 == 0 && a[i] % 3 == 0) {
    console.log(a[i] + '---> multiple of two and three');
  }
  else if (a[i] % 2 == 0) {
    console.log('multiple of two--->' + a[i]);
  }
  else if (a[i] % 3 == 0) {
    console.log('multiple of three--->' + a[i]);
  }
}

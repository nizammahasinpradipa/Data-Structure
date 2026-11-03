// let teman = ['Budi', 'Ani', 'Citra', 'Dedi', 'Eka']

// console.log('Jumlah Teman: ' + teman.length)
// console.log('Teman Pertama: ' + teman[0])
// console.log('Teman Terakhir: ' + teman[teman.length - 1])

// for (let i = 0; i < teman.length; i++) {
//     console.log((i + 1) + '.' + teman[i])
// }

let nilai = [80, 90, 75, 85, 95]
let total = 0

// Total
for (let i = 0; i < nilai.length; i++) {
    total = total + nilai[i]
}

// Bubble Sort
for (let i = 0; i < nilai.length; i++) {
    let indeksMin = i;

    for (let j = i + 1; j < nilai.length; j++) {
        if (nilai[j] < nilai[indeksMin]) {
            indeksMin = j;
        }
    }

    let temp = nilai[i];
    nilai[i] = nilai[indeksMin];
    nilai[indeksMin] = temp;
}


// Mean
let mean = total / nilai.length

console.log(nilai)
console.log('Nilai Tertinggi: ' + nilai[nilai.length - 1])
console.log('Nilai Terendah: ' + nilai[0])
console.log('Total Nilai: ' + total)
console.log('Rata-rata Nilai: ' + mean)
console.log(typeof nilai)

const fs = require('fs')
const directory = `${__dirname}/homev3/Shiny`;
const newDirectory = `${__dirname}/homev3/home-sprites`;
const files = fs.readdirSync(directory)

// poke_capture_1007_003_uk_n_00000000_f_n.png
// 0    1       2    3   4  5 6        7 8
// 0002_000_mf_nm_s.png
// 2    3   4  5  8

for (const file of files) {
  console.log(file)
  const fi = file.split('_');
  const newfilename = [
      fi[2],
      fi[3],
      fi[4],
      fi[5] === 'n'? 'nm': 'gx',
      fi[8] === 'n.png'? 'n.png': 's.png',
    ].join('_');
  fs.renameSync(
    directory + '/' + file,
    newDirectory + '/' + newfilename,
    (err) => {
      console.log(err)
    }
  )
}
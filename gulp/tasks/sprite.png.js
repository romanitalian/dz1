'use strict';

// module.exports = function () {
//   $.gulp.task('sprite:png', function () {
//     return $.gulp.src('./source/sprite/*.png')
//       .pipe($.gp.spritesmith({
//         imgName: 'sprite.png',
//         styleName: 'sprite.css',
//         imgPath: "" + $.config.root + '/assets/img/sprite.png' + ""
//       }))
//       .pipe($.gulp.dest($.config.root + '/assets/img'));
//   })
// };

module.exports = function () {
  $.gulp.task('sprite:png', function () {
    return $.gulp.src('./source/icons/*.png')
      .pipe($.gp.spritesmith({
        imgName: 'sprite.png',
        cssName: 'sprite.css'
      }))
      .pipe($.gulp.dest($.config.root + '/assets/sprite'))
  })
};
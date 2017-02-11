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

// module.exports = function() {
//   $.gulp.task('sprite:png', function() {
//     var spriteData = $.gulp.src('./source/sprite/*.png')
//       .pipe($.gp.spritesmith({
//         imgName: 'sprite.png',
//         cssName: 'sprite.scss',
//         cssFormat: 'scss',
//         imgPath: '../img/sprite/sprite.png',
//         algorithm: 'binary-tree',
//         padding: 5,
//         cssVarMap: function(sprite) {
//           sprite.name = 's-' + sprite.name
//         }
//       }));
//
//     spriteData.img.pipe($.gulp.dest($.config.root + '/assets/img/sprite'));
//     spriteData.css.pipe($.gulp.dest('./app/style'));
//     return spriteData;
//   });
// };



// module.exports = function() {
//   $.gulp.task('sprite:png', function() {
//     var spriteData = $.gulp.src('./source/sprite/*.png')
//       .pipe($.gp.spritesmith({
//         imgName: 'sprite.png',
//         cssName: 'sprite.scss',
//         cssFormat: 'scss',
//         imgPath: '../img/sprite/sprite.png',
//         algorithm: 'binary-tree',
//         padding: 5,
//         cssVarMap: function(sprite) {
//           sprite.name = 's-' + sprite.name
//         }
//       }));
//
//     spriteData.img.pipe($.gulp.dest($.config.root + '/assets/img/sprite'));
//     spriteData.css.pipe($.gulp.dest('./app/style'));
//     return spriteData;
//   });
// };



module.exports = function () {
  $.gulp.task('sprite:png', function () {
    var spriteData = $.gulp.src('./source/icons/*.png').pipe($.gp.spritesmith({
      imgName: 'sprite.png', // итоговый спрайт
      cssName: 'sprite.scss', // файл стилей
      algorithm: 'left-right',
      padding: 20
    }));
    var imgStream = spriteData.img
      .pipe($.gulp.dest('./source/images')); // путь куда записываем спрайт

    var cssStream = spriteData.css
      .pipe($.gulp.dest('./source/style/common')); // путь куда записываем файл стилей для спрайта

    return $.merge(imgStream, cssStream);
  });

};
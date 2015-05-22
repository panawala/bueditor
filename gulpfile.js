var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var sourcemaps = require('gulp-sourcemaps');
var minifycss = require('gulp-minify-css');
var sass = require('gulp-sass');
var del = require('del');

var b_paths = {
    scripts: ['ueditor/_src/**/*.js'],
    css: ['ueditor/themes/**/*.css'],
    images: ['ueditor/themes/default/images/**/*']
};

gulp.task('b-clean', function(cb) {
    del(['ueditor/b-build'], cb);
});

gulp.task('b-scripts', function() {
    var paths  = [
        'editor.js',
        'core/browser.js',
        'core/utils.js',
        'core/EventBase.js',
        'core/dtd.js',
        'core/domUtils.js',
        'core/Range.js',
        'core/Selection.js',
        'core/Editor.js',
        'core/Editor.defaultoptions.js',
        'core/loadconfig.js',
        'core/ajax.js',
        'core/filterword.js',
        'core/node.js',
        'core/htmlparser.js',
        'core/filternode.js',
        'core/plugin.js',
        'core/keymap.js',
        'core/localstorage.js',
        'plugins/defaultfilter.js',
        'plugins/inserthtml.js',
        'plugins/autotypeset.js',
        'plugins/autosubmit.js',
        //'plugins/background.js',
        'plugins/image.js',
        'plugins/justify.js',
        'plugins/font.js',
        'plugins/link.js',
        'plugins/iframe.js',
        //'plugins/scrawl.js',
        'plugins/removeformat.js',
        'plugins/blockquote.js',
        //'plugins/convertcase.js',
        'plugins/indent.js',
        //'plugins/print.js',
        'plugins/preview.js',
        'plugins/selectall.js',
        'plugins/paragraph.js',
        //'plugins/directionality.js',
        //'plugins/horizontal.js',
        //'plugins/time.js',
        'plugins/rowspacing.js',
        'plugins/lineheight.js',
        //'plugins/insertcode.js',
        //'plugins/cleardoc.js',
        'plugins/anchor.js',
        'plugins/wordcount.js',
        //'plugins/pagebreak.js',
        //'plugins/wordimage.js',
        'plugins/dragdrop.js',
        'plugins/undo.js',
        'plugins/copy.js',
        'plugins/paste.js',
        'plugins/puretxtpaste.js',
        'plugins/list.js',
        'plugins/source.js',
        'plugins/enterkey.js',
        'plugins/keystrokes.js',
        'plugins/fiximgclick.js',
        'plugins/autolink.js',
        'plugins/autoheight.js',
        'plugins/autofloat.js',
        //'plugins/video.js',
        //'plugins/table.core.js',
        //'plugins/table.cmds.js',
        //'plugins/table.action.js',
        //'plugins/table.sort.js',
        'plugins/contextmenu.js',
        'plugins/shortcutmenu.js',
        'plugins/basestyle.js',
        'plugins/elementpath.js',
        'plugins/formatmatch.js',
        //'plugins/searchreplace.js',
        'plugins/customstyle.js',
        //'plugins/catchremoteimage.js',
        //'plugins/snapscreen.js',
        //'plugins/insertparagraph.js',
        //'plugins/webapp.js',
        //'plugins/template.js',
        //'plugins/music.js',
        'plugins/autoupload.js',
        'plugins/autosave.js',
        //'plugins/charts.js',
        'plugins/section.js',
        'plugins/simpleupload.js',
        'plugins/serverparam.js',
        //'plugins/insertfile.js',
        'ui/ui.js',
        'ui/uiutils.js',
        'ui/uibase.js',
        'ui/separator.js',
        'ui/mask.js',
        'ui/popup.js',
        'ui/colorpicker.js',
        //'ui/tablepicker.js',
        'ui/stateful.js',
        'ui/button.js',
        'ui/splitbutton.js',
        'ui/colorbutton.js',
        //'ui/tablebutton.js',
        'ui/autotypesetpicker.js',
        'ui/autotypesetbutton.js',
        //'ui/cellalignpicker.js',
        'ui/pastepicker.js',
        'ui/toolbar.js',
        'ui/menu.js',
        'ui/combox.js',
        'ui/dialog.js',
        'ui/menubutton.js',
        'ui/multiMenu.js',
        'ui/shortcutmenu.js',
        'ui/breakline.js',
        'ui/message.js',
        'adapter/editorui.js',
        'adapter/editor.js',
        'adapter/message.js',
        'adapter/autosave.js'

    ].map(function(js_file){
            return 'ueditor/_src/' + js_file;
        });

    return gulp.src(paths)
        .pipe(uglify())
        .pipe(concat('ueditor.min.js'))
        .pipe(gulp.dest('ueditor/b-build/js'));
});

gulp.task('b-css', function(){
    gulp.src(b_paths.css)
        .pipe(minifycss())
        .pipe(concat('ueditor.min.css'))
        .pipe(gulp.dest('ueditor/b-build/css'));
});

gulp.task('b-images', function() {
    return gulp.src(b_paths.images)
        .pipe(imagemin({optimizationLevel: 5}))
        .pipe(gulp.dest('ueditor/b-build/images'));
});

gulp.task('b-watch', function() {
    gulp.watch(b_paths.scripts, ['b-scripts']);
    gulp.watch(b_paths.css, ['b-css']);
    gulp.watch(b_paths.images, ['b-images']);
});

gulp.task('default', ['b-watch', 'b-scripts', 'b-css', 'b-images']);
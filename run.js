const {ImageBuffer} = require("imager-io");

function optimize(from, to, resize_opt) {
    return ImageBuffer
        .open(from)
        .then(buffer => buffer.opt(resize_opt))
        .then(buffer => buffer.save(to))
        .then(() => {
            console.log("[done]", from, "->", to);
        });
}


// Note that this operation will be slower given that the source (and output) resolution is '5184x3874'.
function extremely_noisy_image_showcase() {
    return optimize("samples/extremely-noisy-image.jpeg", "output/extremely-noisy-image.jpeg");
}


///////////////////////////////////////////////////////////////////////////////
// MAIN
///////////////////////////////////////////////////////////////////////////////


// This showcases loading, resizing, and optimizing the given images.
function run_me() {
    return Promise.all([
        optimize("samples/hi-0.jpeg", "output/hi-0.jpeg", "1600x1600"),
        optimize("samples/hi-1.jpeg", "output/hi-1.jpeg", "1600x1600"),
        optimize("samples/hi-2.jpeg", "output/hi-2.jpeg", "1600x1600"),
    ]);
}

run_me();
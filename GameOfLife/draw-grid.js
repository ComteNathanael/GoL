function draw_grid(context, case_length, couleur_stroke, couleur_fill) {
    var tailleCase = case_length || 10;
    couleur_stroke = couleur_stroke || "#00FF00";
    couleur_fill = couleur_fill || "#009900";
    context.save();
    context.strokeStyle = couleur_stroke;
    context.fillStyle = couleur_fill;
    context.lineWidth = 0.25;

    let width = context.canvas.width, height = context.canvas.height;
    for(var x = 0; x < width; x += tailleCase) {
        context.beginPath();
        context.moveTo(x, 0);
        context.lineTo(x, height);
        context.lineWidth = (x % (5*tailleCase) == 0) ? 0.5 : 0.25;
        //if(x % (5*tailleCase) == 0 ) {context.fillText(x, x, 10);} /*Affiche coordonnée*/
        context.stroke();
    }

    for(var y = 0; y < height; y += tailleCase) {
        context.beginPath();
        context.moveTo(0, y);
        context.lineTo(width, y);
        context.lineWidth = (y % (5*tailleCase) == 0) ? 0.5 : 0.25;
        //if(y % (5*tailleCase) == 0 ) {context.fillText(y, 0, y + 10);} /*Affiche coordonnée*/
        context.stroke();
    }
    context.restore();
}
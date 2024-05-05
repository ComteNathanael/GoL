function draw_case(context, matrice, couleur, tailleCase, nbr_case_haut, nbr_case_larg) {
    const getMatrix = (ligne, colonne) => [...Array(ligne)].map(x => [...Array(colonne)].map(b => 0));
    couleur = couleur || "#ffffff";
    tailleCase = tailleCase || 5;
    nbr_case_haut = nbr_case_haut || 80;
    nbr_case_larg = nbr_case_larg || 80;
    matrice = matrice || getMatrix(nbr_case_haut, nbr_case_larg);
    var nb_case = 0;
    console.table(matrice);
    
    context.fillStyle = couleur;
    for(var x = 0; x < nbr_case_haut; x++) { //ligne
        //console.log(matrice[x]);
        for(var y = 0; y < nbr_case_larg; y++) { //colonne
            if(matrice[y][x] == 1) {
                //console.log("(" + x + ", " + y + ") : " + matrice[x][y]);
                nb_case++;
                let tmp_x = x*tailleCase, tmp_y = y*tailleCase;
                context.fillRect(tmp_x, tmp_y, tailleCase, tailleCase);
            }
        }
    }
    console.log("Nombre de case colorié : " + nb_case + "/" + (nbr_case_haut*nbr_case_larg));
}
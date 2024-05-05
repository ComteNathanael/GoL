function update_matrice(matrice) {
    const getMatrix = (ligne, colonne) => [...Array(ligne)].map(x => [...Array(colonne)].map(b => 0));
    var tmp_matrice = getMatrix(matrice.length, matrice[0].length),
    //modif = getMatrix(matrice.length, matrice[0].length);
    
    for(var x = 0; x < matrice.length; x++) {
        for(var y = 0; y < matrice[x].length; y++) {
            var adj = 0;
            if(x-1>=0) adj += matrice[x-1][y]==1;
            if(y-1>=0) adj += matrice[x][y-1]==1;
            if(x+1<matrice.length) adj += matrice[x+1][y]==1;
            if(y+1<matrice[x].length) adj += matrice[x][y+1]==1;
            tmp_matrice[x][y] = adj==2?1:0;
            //modif[x][y] = adj;
        }
    }
    /*console.log("Voisin trouvé :");
    console.table(modif);*/
    return tmp_matrice;
}
function stringatizeDemNums(...v: number[]): string {
    let s = "";
    for (let i = 0; i < v.length; i++) {
        //string temp = String.Format("{0}", v[i]);
        let temp = `$${v[i]}`;
        s += temp;
        s += ", ";
    }

    console.log(s)
    return s;
}



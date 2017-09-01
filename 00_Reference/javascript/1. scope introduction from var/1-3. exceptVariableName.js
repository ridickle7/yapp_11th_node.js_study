function defineScope() {
    scope = 20;
    console.log("scope = " + scope);
}

function executeScope() {
    console.log("scope = " + scope);
}

defineScope();
executeScope();
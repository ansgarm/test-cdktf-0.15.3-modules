// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { Construct } from "constructs";
import { App, TerraformStack } from "cdktf";
import { Acm } from './.gen/modules/acm'

class MyStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    // define resources here
    new Acm(this, "test", {})
  }
}

const app = new App();
new MyStack(app, "test-modules-ts");
app.synth();

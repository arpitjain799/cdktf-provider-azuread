// https://www.terraform.io/docs/providers/azuread/d/application_published_app_ids.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzureadApplicationPublishedAppIdsConfig extends cdktf.TerraformMetaArguments {
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/application_published_app_ids.html#timeouts DataAzureadApplicationPublishedAppIds#timeouts}
  */
  readonly timeouts?: DataAzureadApplicationPublishedAppIdsTimeouts;
}
export interface DataAzureadApplicationPublishedAppIdsTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/application_published_app_ids.html#read DataAzureadApplicationPublishedAppIds#read}
  */
  readonly read?: string;
}

function dataAzureadApplicationPublishedAppIdsTimeoutsToTerraform(struct?: DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference | DataAzureadApplicationPublishedAppIdsTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}

export class DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // read - computed: false, optional: true, required: false
  private _read?: string | undefined; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string | undefined) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azuread/d/application_published_app_ids.html azuread_application_published_app_ids}
*/
export class DataAzureadApplicationPublishedAppIds extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azuread_application_published_app_ids";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azuread/d/application_published_app_ids.html azuread_application_published_app_ids} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzureadApplicationPublishedAppIdsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAzureadApplicationPublishedAppIdsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'azuread_application_published_app_ids',
      terraformGeneratorMetadata: {
        providerName: 'azuread'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // result - computed: true, optional: false, required: false
  public result(key: string): string {
    return new cdktf.StringMap(this, 'result').lookup(key);
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzureadApplicationPublishedAppIdsTimeouts | undefined; 
  private __timeoutsOutput = new DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: DataAzureadApplicationPublishedAppIdsTimeouts | undefined) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      timeouts: dataAzureadApplicationPublishedAppIdsTimeoutsToTerraform(this._timeouts),
    };
  }
}
